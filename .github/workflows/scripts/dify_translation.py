# dify_translation.py

import requests
import os
import subprocess
import time

def git_checkout(branch):
    try:
        subprocess.run(['git', 'checkout', branch], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error checking out branch {branch}: {e}")

def upload_file(file_path, user):
    if not os.path.exists(file_path):
        print(f'File not found: {file_path}')
        return None
      
    upload_url = 'https://api.dify.ai/v1/files/upload'
    headers = {'Authorization': f'Bearer {os.environ["DIFY_API_KEY"]}'}
  
    with open(file_path, 'rb') as file:
        files = {'file': (file_path, file, 'text/markdown')}
        data = {
          'user': user,
          'type': 'MD'
        }
        response = requests.post(upload_url, headers=headers, files=files, data=data)
      
        if response.status_code == 201:
            return response.json().get('id')
        else:
            print(f'File upload failed, status code: {response.status_code}')
            return None

def run_workflow(old_file_id, new_file_id, translation_file_id, user, target_lang):
    workflow_url = 'https://api.dify.ai/v1/workflows/run'
    headers = {
      'Authorization': f'Bearer {os.environ["DIFY_API_KEY"]}',
      'Content-Type': 'application/json'
    }
    inputs = {'target_lang': target_lang}
  
    if old_file_id:
        inputs['old_eng_file'] = {'transfer_method': 'local_file', 'upload_file_id': old_file_id, 'type': 'document'}
      
    if new_file_id:
        inputs['new_eng_file'] = {'transfer_method': 'local_file', 'upload_file_id': new_file_id, 'type': 'document'}
      
    if translation_file_id:
        inputs['translation_file'] = {'transfer_method': 'local_file', 'upload_file_id': translation_file_id, 'type': 'document'}
      
    data = {'inputs': inputs, 'user': user}

    for _ in range(3):
        try:
            response = requests.post(workflow_url, headers=headers, json=data, timeout=999)
            if response.status_code == 200:
                print('Workflow execution successful')
                return response.json()
            else:
                print(f'Workflow execution failed, status code: {response.status_code}')
        except requests.exceptions.RequestException as e:
            print(f'Request failed: {e}')
            
        time.sleep(1)
    return {'status': 'error', 'message': f'Failed to execute workflow after {max_retries} attempts'}

def write_translated_content(translation_file_path, blog_translated):
    os.makedirs(os.path.dirname(translation_file_path), exist_ok=True)
    with open(translation_file_path, 'w', encoding='utf-8') as f:
        f.write(blog_translated)
    print('Translation is written to file.')

def commit_and_push_changes(translation_file_path):
    subprocess.run(['git', 'config', '--global', 'user.email', 'no-reply@github.com'])
    subprocess.run(['git', 'config', '--global', 'user.name', 'GitHub Actions'])
    if subprocess.run(['git', 'diff', '--cached', '--quiet']).returncode != 0:
        subprocess.run(['git', 'add', translation_file_path])
        subprocess.run(['git', 'commit', '-m', 'Add translation'])
        subprocess.run(['git', 'push'])

def main(eng_content, translation_file_content, lang):
    user = 'testUser123'
    git_checkout('origin/main')
    old_file_id = upload_file(eng_content, user)
    git_checkout('-')
    new_file_id = upload_file(eng_content, user)
    translation_file_id = upload_file(translation_file_content, user)

    if new_file_id:
        if old_file_id and translation_file_id:
            result = run_workflow(old_file_id, new_file_id, translation_file_id, user, target_lang=lang)
        else:
            result = run_workflow(None, new_file_id, None, user, target_lang=lang)

        if result and 'data' in result:
            blog_translated = result['data'].get('outputs', {}).get('blog_translated')
            if blog_translated:
                write_translated_content(translation_file_content, blog_translated)
                commit_and_push_changes(translation_file_content)
    else:
        print('One or more file uploads failed, and workflow cannot be executed.')

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 4:
        print("Usage: python3 scripts/dify_translation.py <eng_content> <translation_file_content> <lang>")
    else:
        eng_content = sys.argv[1]
        translation_file_content = sys.argv[2]
        lang = sys.argv[3]
        main(eng_content, translation_file_content, lang)
