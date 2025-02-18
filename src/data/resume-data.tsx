import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "方徐凌",
  initials: "XuLing Fang",
  location: "Ningbo，Zhejiang",
  locationLink:
    "https://map.baidu.com/search/%E5%AE%81%E6%B3%A2%E5%B8%82/@13540031,3464873.25,12z?querytype=s&da_src=shareurl&wd=%E5%AE%81%E6%B3%A2&c=180&src=0&pn=0&sug=0&l=13&b=(13505566,3454986;13571102,3486442)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2",
  about: "23年本科毕业|男|00年生",
  summary: (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">基础技能</h3>
        <ul className="list-disc space-y-1.5 pl-5 ">
          <li>
            熟悉 HTML5/CSS3 ，熟练运用 Flex/Grid 布局，能够还原复杂设计稿。
          </li>
          <li>
            熟练使用 Sass、Less，实现样式代码的模块化与高效管理，了解 BEM 规范。
          </li>
          <li>
            理解 JavaScript 原型链、闭包、事件循环等概念，熟悉 ES6 新特性。
          </li>
          <li>
            熟悉浏览器渲染机制，优化 DOM 操作，减少页面重绘与回流，提升性能。
          </li>
          <li>熟悉 Vue.js，掌握组件化开发与数据绑定。</li>
          <li>熟悉 leaflet 地图库，进行地图开发。</li>
          <li>
            了解 uniapp 开发微信小程序，Nodejs，了解 Nextjs，Solidjs
            等前端框架，并进行过实践开发。
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">React技术栈</h3>
        <ul className="list-disc space-y-1.5 pl-5 ">
          <li>熟练使用 React Hooks 进行组件开发，深入理解 React 核心原理。</li>
          <li>
            熟悉 React 性能优化，运用 memoization 技术与代码分割提升效率。
          </li>
          <li>熟练使用 Umijs 前端开发框架。</li>
          <li>
            熟练使用 React 生态库，如 Ant Design、Ant Design
            Pro、ahook、React-Router、dndkit、react-amap、bizcharts等。
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className=" font-semibold text-gray-900">个人特色</h3>
        <ul className="list-disc space-y-1.5 pl-5 ">
          <li>使用 AI 工具辅助开发，提升工作效率。</li>
          <li>喜欢尝试新技术，并进行实践。</li>
        </ul>
      </div>
    </div>
  ),
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://dnzzk2.icu",
  contact: {
    email: "dnzzk2@126.com",
    tel: "+8619883005053",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Dnzzk2",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "宁波鑫义信息科技有限公司",
      // link: "https://film.io",
      badges: ["React", "Ant Design", "umijs", "less"],
      title: "前端开发工程师",
      logo: ConsultlyLogo,
      start: "2022-7",
      end: "至今",
      description: (
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">主要职责</p>
            <p className="text-gray-700">
              负责公司项目后台页面的开发与维护，入职至今已参与开发维护项目
              <span className="font-semibold text-gray-900">65+</span>
              ，主要负责项目
              <span className="font-semibold text-gray-900">21+</span>。
            </p>
          </div>
          {/* 分割线 */}
          <hr className="border-gray-200" />
          <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
            项目
          </h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">高桥国资管理系统</p>
              <p className="text-gray-700">高桥镇国有资产监督管理系统，</p>
              <p className="font-medium text-gray-900">我的职责与贡献：</p>
              <ul className="list-inside list-disc space-y-1 text-gray-700">
                <li>
                  负责访客模块、运营管理后台及配套小程序的开发维护，主导代码优化和重构工作
                </li>
                <li>
                  基于 React
                  技术栈开发新功能，采用模块化组件设计，封装通用业务组件，提升代码复用率
                  40%+
                </li>
                <li>与产品、设计团队紧密协作，完成需求评审与方案设计。</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
