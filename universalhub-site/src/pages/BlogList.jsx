import { useMemo, useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import { posts } from '../data/posts'

const POSTS_PER_PAGE = 6

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))),
    [],
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchTerm])

  const filteredPosts = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase()
    return [...posts]
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
      .filter((post) => {
        const matchesCategory =
          selectedCategory === 'All' || post.category === selectedCategory
        const matchesSearch =
          !normalizedTerm ||
          post.title.toLowerCase().includes(normalizedTerm) ||
          post.excerpt.toLowerCase().includes(normalizedTerm) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(normalizedTerm))

        return matchesCategory && matchesSearch
      })
  }, [selectedCategory, searchTerm])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">Blog</p>
        <h1>Briefings, product reviews, and playbooks for modern operators.</h1>
        <p className="hero-description">
          Browse by category, skim highlights, and deep dive into the kits and
          platforms we trial every month.
        </p>
      </section>

      <section className="section">
        <div className="filters">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="grid three">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </div>
  )
}

export default BlogList

