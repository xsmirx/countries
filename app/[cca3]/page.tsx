import Image from 'next/image'
import {CountryResp} from '@/types/countries'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {TypographyH1} from '@/components/ui/typography'

type Props = {
  params: {cca3: string}
}

export default async function ({params: {cca3}}: Props) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
  const json: CountryResp[] = await response.json()
  const country = json[0]

  console.log(country)

  const languages = Object.keys(country.languages)
  const currencies = Object.keys(country.currencies)

  return (
    <>
      <TypographyH1 className="mb-10 text-center">
        {country.name.official}
      </TypographyH1>
      <div className="flex items-center justify-center gap-10">
        <div className="relative h-[200px] w-[300px]">
          <Image
            src={country.flags.svg}
            alt={country.cca3 + ' flag'}
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-semibold">Native Name: </span>
            <div className="inline-flex flex-col">
              {languages.map(language => (
                <span>
                  {country.name.nativeName[language]?.official}
                  {` (${language})`}
                </span>
              ))}
            </div>
          </p>
          <p>
            <span className="font-semibold">Population: </span>
            {country.population.toLocaleString('en-US')}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold">Sub Region: </span>
            {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
          <p>
            <span className="font-semibold">Top Lavel Domain: </span>
            {country.tld}
          </p>
          <p>
            <span className="font-semibold">Currencies: </span>
            <div className="inline-flex gap-1">
              {currencies.map(currency => (
                <span>{currency}</span>
              ))}
            </div>
          </p>
          <p>
            <span className="font-semibold">Languages: </span>
            <div className="inline-flex gap-1">
              {languages.map(language => (
                <span>{language}</span>
              ))}
            </div>
          </p>
        </div>
      </div>
    </>
  )
}
