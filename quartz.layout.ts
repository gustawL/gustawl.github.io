import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Ukryj wszystko z "Notatki/*" w Explorerze (tylko nawigacja)
const explorerFilterFn = (node: any) => {
  const slug = String(node.data?.slug ?? "").toLowerCase()

  // jeśli masz folder "Notatki/", to jego zawartość będzie zwykle miała slug "notatki/..."
  if (slug.startsWith("blog/")) return false

  // czasem folder/strona indeksowa może mieć slug "notatki" albo "notatki/index"
  if (slug === "blog" || slug === "blog/index") return false

  return true
}


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/gustawl",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "home",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),

    // Show a "recently updated" list inside the page body for the Changelog note
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "notes, microposts etc.",
        limit: 24,
        showTags: false,
        // exclude the changelog page itself from the list:
        filter: (f) => f.slug !== "0_latest",
      }),
      // render this widget only on the changelog page:
      condition: (page) => page.fileData.slug === "0_latest",
    }),

    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
      ],
    }),
    Component.Explorer({
  title: "Explorer",
  useSavedState: true,
  filterFn: explorerFilterFn,
}),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
      ],
    }),
    Component.Explorer({
  title: "Explorer",
  useSavedState: true,
  filterFn: explorerFilterFn,
}),
  ],
  right: [],
}
