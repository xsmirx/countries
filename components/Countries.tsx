'use client'

import {FC, useState} from 'react'
import {CountriesResp, Region} from '@/types/countries'
import Link from 'next/link'
import Image from 'next/image'
import {Input} from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {Card, CardContent, CardHeader, CardTitle} from './ui/card'

const regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

type Props = {
  countries: CountriesResp
}

export const Countries: FC<Props> = ({countries: allCauntries}) => {
  const [value, setValue] = useState<string>('')
  const [selectedRegion, setSelectedRegion] = useState<string>()

  const countries: CountriesResp = allCauntries
    .filter(
      country =>
        country.name.official.toLowerCase().includes(value.toLowerCase()) ||
        country.name.common.toLowerCase().includes(value.toLowerCase())
    )
    .filter(country =>
      selectedRegion ? selectedRegion === country.region : true
    )
    .sort((countryA, countryB) => countryB.population - countryA.population)

  const handleChangeRegion = (region: string): void => {
    setSelectedRegion(prevRegion =>
      region === prevRegion || region === 'reset' ? undefined : region
    )
  }

  return (
    <>
      <div className="flex justify-between">
        <Input
          type="text"
          placeholder="Search for a countriy..."
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          className="w-[30%]"
        />

        <Select onValueChange={handleChangeRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map(region => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-10 self-center pt-10">
        {countries.map(country => (
          <Link
            href="/"
            key={country.fifa}
            className="min-h-full rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Card className="flex min-h-full flex-col overflow-hidden">
              <div className="relative p-[33.5%]">
                <Image
                  alt={country.fifa + ' flag'}
                  src={country.flags.png}
                  fill
                  className="object-contain object-top"
                />
              </div>

              <CardHeader className="flex-auto">
                <CardTitle>{country.name.official}</CardTitle>
              </CardHeader>

              <CardContent className="h-full">
                <p>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString('en-US')}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
