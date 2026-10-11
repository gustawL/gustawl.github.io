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
          light: "#1A3228",
          lightgray: "#185239",
          gray: "#1A3228",
          darkgray: "#D7E0DC",
          dark: "#D8F3E8",
          secondary: "#52B78D",
          tertiary: "#00CF79",
          highlight: "#0F3023",
          textHighlight: "#2D6A51",
        },
        darkMode: {
          light: "#1A3228",
          lightgray: "#185239",
          gray: "#1A3228",
          darkgray: "#D7E0DC",
          dark: "#D8F3E8",
          secondary: "#52B78D",
          tertiary: "#00CF79",
          highlight: "#0F3023",
          textHighlight: "#2D6A51",
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
