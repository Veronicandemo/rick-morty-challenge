/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import Card from './card/Card'
import Filter from './filter/Filter'
import Loading from './loading/Loading'
import Search from './search/Search'

const Pagination = dynamic(() => import('@/app/components/pagination/Pagination'), {
  ssr: false
})

const  Characters = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [loading, setLoading] = useState(true)
  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0, count: '' },
    results: []
  })
  const [search, setSearch] = useState('')
  const { info, results } = fetchedData

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    setLoading(true)
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setFetchedData(data)
        setLoading(false)
      })
  }, [api])

  return (
    <main className="h-full">
      <div className="container flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[1rem] pb-[2rem]">
          <div className="bg-[#F3F4F6] rounded-lg p-[1rem] flex flex-col justify-between items-center gap-[1rem] sm:flex-row">
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className="flex gap-[1rem] text-xl font-medium text-[#01AFCA]">
              {info && info.count ? <>{info.count}</> : '0'} Characters
            </div>
          </div>
          <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
            <div>
              <Filter
                setStatus={setStatus}
                setGender={setGender}
                setSpecies={setSpecies}
                setPageNumber={setPageNumber}
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="bg-[#F3F4F6] rounded-lg p-[1rem] grid gap-[2rem]">
                {loading ? (
                  <div className="m-auto">
                    <Loading />
                  </div>
                ) : (
                  <Card results={results} />
                )}
              </div>
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Characters