import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gustaw Lizak",
    description: "My digital garden, personal knowledge management.",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "gustawl.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    head: { meta: [ { name: "msvalidate.01", content: "3B43FD346372DA4469BE84D8B5F96F65" } ] },
    theme: {
      default: "dark",
      disableThemeToggle: true,
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron",
        weights: [400, 700],
        body: "Inter",
        weights: [400, 600],
        code: "monospace",
      },
      css: "styles/themes/_index.scss",
      colors: {
        lightMode: {
          light: "#071d1b",
          lightgray: "#0d2d28",
          gray: "#1f4942",
          darkgray: "#92c7b6",
          dark: "#d8fbe6",
          secondary: "#baff43",
          tertiary: "#59eab7",
          highlight: "rgba(186, 255, 67, 0.15)",
          textHighlight: "rgba(89, 234, 183, 0.35)",
        },
        darkMode: {
          light: "#071d1b",
          lightgray: "#0d2d28",
          gray: "#1f4942",
          darkgray: "#92c7b6",
          dark: "#d8fbe6",
          secondary: "#baff43",
          tertiary: "#59eab7",
          highlight: "rgba(186, 255, 67, 0.15)",
          textHighlight: "rgba(89, 234, 183, 0.35)",
        },
      },
}
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
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
