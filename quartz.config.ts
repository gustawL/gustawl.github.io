import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gustaw Lizak",
    pageTitleSuffix: " — Gustaw Lizak",
    description: "Gustaw's blog, portfolio, and evolving digital garden.",
    enableSPA: true,
    enablePopovers: true,
    locale: "pl-PL",
    baseUrl: "gustawl.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      default: "light",
      disableThemeToggle: false,
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      css: "styles/themes/_index.scss",
      colors: {
        lightMode: {
          light: "#1A3227",
          lightgray: "#1A3227",
          gray: "#1A3227",
          darkgray: "#D8F3E6",
          dark: "#D9E0DD",
          secondary: "#52B788",
          tertiary: "#00CF6E",
          highlight: "#16432E",
          textHighlight: "#2D6A4E",
        },
        darkMode: {
          light: "#1A3227",
          lightgray: "#1A3227",
          gray: "#1A3227",
          darkgray: "#D8F3E6",
          dark: "#D9E0DD",
          secondary: "#52B788",
          tertiary: "#00CF6E",
          highlight: "#16432E",
          textHighlight: "#2D6A4E",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
