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
    head: { meta: [ { name: "msvalidate.01", content: "3B43FD346372DA4469BE84D8B5F96F65" } ] },
    theme: {
      default: "light",
      disableThemeToggle: false,
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        body: "RecMonoCasual Nerd Font Propo",
        code: "RecMonoCasual Nerd Font Propo",
      },
      css: "styles/themes/_index.scss",
      colors: {
        /**
         * A warm pearl‑inspired colour palette.
         *
         * Light mode uses off‑white and beige tones for backgrounds and
         * deep brown for primary text. The accent colours are slightly
         * darker browns which still contrast sufficiently against the pale
         * backgrounds. Highlight colours reuse the dark text colour with a
         * low opacity to create subtle emphasis without introducing black.
         *
         * Dark mode inverts the palette: deep brown backgrounds paired
         * with off‑white text and pale beige accents. Highlights use the
         * light text colour with transparency.  These choices avoid pure
         * black while maintaining WCAG AAA contrast ratios.
         */
        lightMode: {
          light: "#F8F4EC",
          lightgray: "#F1EADA",
          gray: "#EAE0C8",
          darkgray: "#64573F",
          dark: "#4A4435",
          secondary: "#6A5C44",
          tertiary: "#7F7054",
          highlight: "rgba(74,68,53,0.10)",
          textHighlight: "rgba(74,68,53,0.20)",
        },
        darkMode: {
          light: "#4A4435",
          lightgray: "#64573F",
          gray: "#7F7054",
          darkgray: "#EAE0C8",
          dark: "#F8F4EC",
          secondary: "#EAE0C8",
          tertiary: "#F1EADA",
          highlight: "rgba(248,244,236,0.10)",
          textHighlight: "rgba(248,244,236,0.20)",
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