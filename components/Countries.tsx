'use client'

import {FC, useState} from 'react'
import {CountriesResp, Region} from '@/types/countries'
import {Input} from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import Link from 'next/link'

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

      <div className="grid grid-cols-3 gap-10 pt-10">
        {countries.map(country => (
          <Link href="/" key={country.name.official}>
            <Card>
              <CardHeader>
                <CardTitle>{country.name.official}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <div key={country.name.official}>{country.name.official}</div>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
