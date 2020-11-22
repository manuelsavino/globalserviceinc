import { graphql, useStaticQuery } from "gatsby"

function useHomePageData() {
  const data = useStaticQuery(graphql`
    query Homepage {
      allSanityHomepage {
        edges {
          node {
            headline
            _rawAbout
          }
        }
      }
    }
  `)
  return data.allSanityHomepage
}

export default useHomePageData
