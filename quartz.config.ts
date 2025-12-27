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
    description: "Gustaw Lizak blog, digital garden, personal knowledge management.",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "gustawl.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    head: { meta: [ { name: "msvalidate.01", content: "3B43FD346372DA4469BE84D8B5F96F65" } ] },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      css: "styles/themes/_index.scss",
      colors: {
        lightMode: {
          light: "#f3f8fc",
          lightgray: "#deeaf3",
          gray: "#a7b7c8",
          darkgray: "#2c4354",
          dark: "#102a3a",
          secondary: "#6da7d1",
          tertiary: "#8bbde1",
          highlight: "rgba(109, 167, 209, 0.15)",
          textHighlight: "rgba(165, 197, 225, 0.5)",
        },
        darkMode: {
          light: "#0d2033",
          lightgray: "#19344d",
          gray: "#365072",
          darkgray: "#d2e0eb",
          dark: "#f3f8fc",
          secondary: "#7daed6",
          tertiary: "#5a8bb7",
          highlight: "rgba(125, 174, 214, 0.2)",
          textHighlight: "rgba(35, 61, 90, 0.5)",
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
