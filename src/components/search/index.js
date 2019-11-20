export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const handleClickOutside = event =>
    !ref.current.contains(event.target) && setFocus(false)

  useEffect(() => {
    [`mousedown`, `touchstart`].forEach(event =>
      document.addEventListener(event, handleClickOutside)
    )
    return () =>
      [`mousedown`, `touchstart`].forEach(event =>
        document.removeEventListener(event, handleClickOutside)
      )
  })
