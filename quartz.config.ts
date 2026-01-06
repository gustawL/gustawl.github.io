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
    pageTitleSuffix: " — Gustaw Lizak",
    description: "Gustaw's blog, portfolio, and evolving digital garden.",
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
          light: "#100607",
          lightgray: "#1E0809",
          gray: "#3A1A1B",
          darkgray: "#BFA8A9",
          dark: "#FCFCFC",

          secondary: "#D22F30",   // strong ruby
          tertiary: "#E69192",

          highlight: "rgba(210, 47, 48, 0.18)",
          textHighlight: "rgba(242, 203, 203, 0.30)",
        },
        darkMode: {
          light: "#100607",
          lightgray: "#1E0809",
          gray: "#3A1A1B",
          darkgray: "#BFA8A9",
          dark: "#FCFCFC",

          secondary: "#D22F30",   // strong ruby
          tertiary: "#E69192",

          highlight: "rgba(210, 47, 48, 0.18)",
          textHighlight: "rgba(242, 203, 203, 0.30)",
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
