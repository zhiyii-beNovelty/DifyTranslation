const { description } = require("../../package");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "FabriXAI User Guide",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#57abf0" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { property: "og:site_name", content: "FabriXAI User Guide" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "256x256",
        href: "/favicon.ico",
      },
    ],
    [
      'script',
      {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-SJJ1VS5ZRJ',
      },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-SJJ1VS5ZRJ');",
        ],
    ],
  ],

  locales: {
    "/en-us/": {
      lang: "en-US",
      title: "FabriXAI User Guide",
    },
    "/zh-hk/": {
      lang: "zh-HK",
      title: "FabriXAI 用戶指南",
    },
  },

  /* 

```js
// .vuepress/config.js
const { defineHopeConfig } = require("vuepress-theme-hope");

module.exports = defineHopeConfig({
  locales: {
    "/": {
      lang: "en-US",
    },
    "/zh/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    // common config
    // ...
    locales: {
      "/": {
        // config for English
        // ...
      },
      "/zh/": {
        // config for Chinese
        // ...
      },
    },
  },
});
```

*/

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    logo: "/assets/fabrixai-header-logo.svg",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    displayAllHeaders: false,
    activeHeaderLinks: true,

    locales: {
      "/en-us/": {
        label: "English",
        selectText: "Languages",
        nav: [
          {
            text: "Guide",
            link: "/en-us/Get Started/what-is-fabrixai",
          },

          {
            text: "Visit FabriXAI",
            link: "http://www.fabrixai.com",
          },
        ],
        sidebar: [
          // Get Started
          {
            title: "Get Started",
            // path: '/en-us/Get Started/what-is-fabrixai',
            collapsable: true,
            children: [
              {
                title: "What is FabriXAI",
                path: "/en-us/Get Started/what-is-fabrixai",
              },
              {
                title: "Key Concepts",
                    path: "/en-us/Get Started/key-concepts",
              },
            ],
          },

          // AI Agents
          {
            title: "AI Agents",
            // path: '/en-us/AI Agents/ai-agents',
            collapsable: true,
            children: [
              {
                title: "Introduction to AI Agents",
                path: "/en-us/AI Agents/ai-agents",
              },
              {
                title: "Create AI Agent",
                children: [
                  {
                    title: "Create From Templates",
                    path: "/en-us/AI Agents/create-from-templates",
                  },
                ],
              },
              {
                title: "Configure AI Agent",
                path: "/en-us/AI Agents/configure-ai-agent",
              },
              {
                title: "Use AI Agent",
                path: "/en-us/AI Agents/use-ai-agent",
              },
              {
                title: "Share AI Agent",
                path: "/en-us/AI Agents/share-ai-agent",
              },
              {
                title: "Integrations",
                children: [
                  {
                    title: "API",
                    path: "/en-us/AI Agents/integrations-api",
                  },
                ],
              },
            ],
          },

          // Knowledge
          {
            title: "Knowledge",
            // path: '/en-us/Knowledge/knowledge',
            collapsable: true,
            children: [
              {
                title: "Knowledge",
                path: "/en-us/Knowledge/knowledge",
              },
            ],
          },

          // Use Cases
          {
            title: "Use Cases",
            path: '/en-us/Use Cases/Agent Templates/agent-templates',
            collapsable: true,
            children: [
              {
                title: "Agent Templates",
                children: [
                  {
                    title: "AI Code Tutor",
                    path: "/en-us/Use Cases/Agent Templates/ai-code-tutor",
                  },
                  {
                    title: "Blog Post Generator",
                    path: "/en-us/Use Cases/Agent Templates/blog-post-generator",
                  },
                  {
                    title: "Code Convertor",
                    path: "/en-us/Use Cases/Agent Templates/code-convertor",
                  },
                  {
                    title: "Complaint Response Email Generator",
                    path: "/en-us/Use Cases/Agent Templates/complaint-response-email-generator",
                  },
                  {
                    title: "Customer Inquiry Prioritizing Agent",
                    path: "/en-us/Use Cases/Agent Templates/customer-inquiry-prioritizing-agent",
                  },
                  {
                    title: "Email Data Extractor",
                    path: "/en-us/Use Cases/Agent Templates/email-data-extractor",
                  },
                  {
                    title: "Job Description Generator",
                    path: "/en-us/Use Cases/Agent Templates/job-description-generator",
                  },
                  {
                    title: "Keywords Identifier",
                    path: "/en-us/Use Cases/Agent Templates/keywords-identifier",
                  },
                  {
                    title: "Paraphrasing Agent",
                    path: "/en-us/Use Cases/Agent Templates/paraphrasing-agent",
                  },
                  {
                    title: "PowerPoint Outline Generator",
                    path: "/en-us/Use Cases/Agent Templates/powerpoint-outline-generator",
                  },
                  {
                    title: "Product Description Enhancer",
                    path: "/en-us/Use Cases/Agent Templates/product-description-enhancer",
                  },
                  {
                    title: "Prompt Enhancer",
                    path: "/en-us/Use Cases/Agent Templates/prompt-enhancer",
                  },
                  {
                    title: "Question Bank Generator",
                    path: "/en-us/Use Cases/Agent Templates/question-bank-generator",
                  },
                  {
                    title: "Sales Pitch Generator",
                    path: "/en-us/Use Cases/Agent Templates/sales-pitch-generator",
                  },
                  {
                    title: "Sensitive Data Filtering Agent",
                    path: "/en-us/Use Cases/Agent Templates/sensitive-data-filtering-agent",
                  },
                  {
                    title: "SEO Internal Link Builder",
                    path: "/en-us/Use Cases/Agent Templates/seo-internal-link-builder",
                  },
                  {
                    title: "SEO Meta Tags Generator",
                    path: "/en-us/Use Cases/Agent Templates/seo-meta-tags-generator",
                  },
                  {
                    title: "Social Media Post Generator",
                    path: "/en-us/Use Cases/Agent Templates/social-media-post-generator",
                  },
                  {
                    title: "Spam Detector",
                    path: "/en-us/Use Cases/Agent Templates/spam-detector",
                  },
                  {
                    title: "Summarizer",
                    path: "/en-us/Use Cases/Agent Templates/summarizer",
                  },
                  {
                    title: "Thank You Email Generator",
                    path: "/en-us/Use Cases/Agent Templates/thank-you-email-generator",
                  },
                  {
                    title: "Writing Proofreader",
                    path: "/en-us/Use Cases/Agent Templates/writing-proofreader",
                  },
                ],
              },
            ],
          },

          // FAQ
          {
            title: "FAQ",
            collapsable: true,
            children: [
              {
                title: "What is an AI Agent?",
                path: "/en-us/FAQ/what-is-an-ai-agent",
              },
              {
                title: "What are Agent Templates?",
                path: "/en-us/FAQ/what-are-agent-templates",
              },
              {
                title: "What Types of Knowledge Can I Add to My AI Agent?",
                path: "/en-us/FAQ/what-types-of-knowledge-can-i-add-to-my-ai-agent",
              },
              {
                title: "What AI Models are Supported?",
                path: "/en-us/FAQ/what-ai-models-are-supported",
              },
              {
                title: "Can I share my AI Agent with others?",
                path: "/en-us/FAQ/can-i-share-my-ai-agent-with-others",
              },
              {
                title: "Can I use AI agent in my own apps?",
                path: "/en-us/FAQ/can-i-use-ai agent-in-my-own-apps",
              },
            ],
          },
        ],
      },
      "/zh-hk/": {
        label: "繁體中文",
        selectText: "選擇語言",
        nav: [
          {
            text: "指南",
            link: "/zh-hk/Get Started/what-is-fabrixai",
          },

          {
            text: "前往FabriXAI",
            link: "http://www.fabrixai.com",
          },
        ],
        sidebar: [
          // Get Started
          {
            title: "快速開始",
            // path: '/zh-hk/Get Started/what-is-fabrixai',
            collapsable: true,
            children: [
              {
                title: "什麼是FabriXAI",
                path: "/zh-hk/Get Started/what-is-fabrixai",
              },
              {
                title: "關鍵概念",
                path: "/zh-hk/Get Started/key-concepts",
              },
            ],
          },

          // AI Agents
          {
            title: "AI代理",
            // path: '/zh-hk/AI Agents/ai-agents',
            collapsable: true,
            children: [
              {
                title: "AI代理簡介",
                path: "/zh-hk/AI Agents/ai-agents",
              },
              {
                title: "建立AI代理",
                children: [
                  {
                    title: "從範本創建",
                    path: "/zh-hk/AI Agents/create-from-templates",
                  },
                ],
              },
              {
                title: "配置AI代理",
                path: "/zh-hk/AI Agents/configure-ai-agent",
              },
              {
                title: "使用AI代理",
                path: "/zh-hk/AI Agents/use-ai-agent",
              },
              {
                title: "分享AI代理",
                path: "/zh-hk/AI Agents/share-ai-agent",
              },
              {
                title: "整合",
                children: [
                  {
                    title: "API",
                    path: "/zh-hk/AI Agents/integrations-api",
                  },
                ],
              },
            ],
          },

          // Knowledge
          {
            title: "知識",
            // path: '/zh-hk/Knowledge/knowledge',
            collapsable: true,
            children: [
              {
                title: "知識",
                path: "/zh-hk/Knowledge/knowledge",
              },
            ],
          },

          // Use Cases
          {
            title: "使用案例",
            path: '/zh-hk/Use Cases/Agent Templates/agent-templates',
            collapsable: true,
            children: [
              {
                title: "代理模板",
                children: [
                  {
                    title: "AI程式碼導師",
                    path: "/zh-hk/Use Cases/Agent Templates/ai-code-tutor",
                  },
                  {
                    title: "部落格文章生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/blog-post-generator",
                  },
                  {
                    title: "程式碼轉換器",
                    path: "/zh-hk/Use Cases/Agent Templates/code-convertor",
                  },
                  {
                    title: "投訴回覆郵件生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/complaint-response-email-generator",
                  },
                  {
                    title: "客戶查詢優先排序代理",
                    path: "/zh-hk/Use Cases/Agent Templates/customer-inquiry-prioritizing-agent",
                  },
                  {
                    title: "郵件資料提取器",
                    path: "/zh-hk/Use Cases/Agent Templates/email-data-extractor",
                  },
                  {
                    title: "職位描述生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/job-description-generator",
                  },
                  {
                    title: "關鍵詞識別器",
                    path: "/zh-hk/Use Cases/Agent Templates/keywords-identifier",
                  },
                  {
                    title: "改寫代理",
                    path: "/zh-hk/Use Cases/Agent Templates/paraphrasing-agent",
                  },
                  {
                    title: "PowerPoint大綱生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/powerpoint-outline-generator",
                  },
                  {
                    title: "產品描述增強器",
                    path: "/zh-hk/Use Cases/Agent Templates/product-description-enhancer",
                  },
                  {
                    title: "提示增強器",
                    path: "/zh-hk/Use Cases/Agent Templates/prompt-enhancer",
                  },
                  {
                    title: "問題庫生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/question-bank-generator",
                  },
                  {
                    title: "銷售提案生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/sales-pitch-generator",
                  },
                  {
                    title: "敏感數據過濾代理",
                    path: "/zh-hk/Use Cases/Agent Templates/sensitive-data-filtering-agent",
                  },
                  {
                    title: "SEO內部連結建立器",
                    path: "/zh-hk/Use Cases/Agent Templates/seo-internal-link-builder",
                  },
                  {
                    title: "SEO元標籤生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/seo-meta-tags-generator",
                  },
                  {
                    title: "社交媒體帖文生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/social-media-post-generator",
                  },
                  {
                    title: "垃圾郵件檢測器",
                    path: "/zh-hk/Use Cases/Agent Templates/spam-detector",
                  },
                  {
                    title: "總結工具",
                    path: "/zh-hk/Use Cases/Agent Templates/summarizer",
                  },
                  {
                    title: "感謝郵件生成器",
                    path: "/zh-hk/Use Cases/Agent Templates/thank-you-email-generator",
                  },
                  {
                    title: "寫作校對工具",
                    path: "/zh-hk/Use Cases/Agent Templates/writing-proofreader",
                  },
                ],
              },
            ],
          },

          // FAQ
          {
            title: "常見問題",
            collapsable: true,
            children: [
              {
                title: "什麼是AI代理？",
                path: "/zh-hk/FAQ/what-is-an-ai-agent",
              },
              {
                title: "什麼是代理模板？",
                path: "/zh-hk/FAQ/what-are-agent-templates",
              },
              {
                title: "我可以為AI代理添加哪些類型的知識？",
                path: "/zh-hk/FAQ/what-types-of-knowledge-can-i-add-to-my-ai-agent",
              },
              {
                title: "支援哪些AI模型？",
                path: "/zh-hk/FAQ/what-ai-models-are-supported",
              },
              {
                title: "我可以與他人分享我的AI代理嗎？",
                path: "/zh-hk/FAQ/can-i-share-my-ai-agent-with-others",
              },
              {
                title: "我可以在自己的應用程式中使用AI代理嗎？",
                path: "/zh-hk/FAQ/can-i-use-ai agent-in-my-own-apps",
              },
            ],
          },
        ],
      },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: {
      "@vuepress/plugin-back-to-top": true,
      "@vuepress/plugin-medium-zoom": true,
      sitemap: {
        hostname: "https://guide.fabrixai.com",
      },
      // "@vuepress/google-analytics": {
      //   ga: "UA-65437122-4", // UA-00000000-0
      // },
      "@snowdog/vuepress-plugin-pdf-export": {
        outputFileName: "docs.pdf",
      },
    },

    //  Webpack configuration for aliases.
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./")          
        },
      },
    },
  },
};
