import {Countries} from '@/components/Countries'
import {CountriesResp} from '@/types/countries'

export default async function Home() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries: CountriesResp = await res.json()

  return <Countries countries={countries} />
}
