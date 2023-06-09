import {CountryResp} from '@/types/countries'
import {TypographyH1} from '@/components/ui/typography'
import Image from 'next/image'
import {Badge} from '@/components/ui/badge'
import {AspectRatio} from '@/components/ui/aspect-ratio'

type Props = {
  params: {cca3: string}
}

export default async function ({params: {cca3}}: Props) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
  const json: CountryResp[] = await response.json()
  const country = json[0]

  const languages = Object.keys(country.languages)
  const currencies = Object.keys(country.currencies)

  return (
    <>
      <TypographyH1 className="mb-4 text-center">
        {country.name.official}
      </TypographyH1>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
        <div className="relative w-full flex-1 py-[33.5%] sm:h-[200px] sm:w-[300px] sm:p-0">
          <Image
            src={country.flags.svg}
            alt={country.cca3 + ' flag'}
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="font-semibold">Native Name: </p>
            <p className="inline-flex flex-col">
              {languages.map(language => (
                <span key={language}>
                  {country.name.nativeName[language]?.official}
                  {` (${language})`}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="font-semibold">Population: </p>
            {country.population.toLocaleString('en-US')}
          </div>
          <div>
            <p className="font-semibold">Region: </p>
            {country.region}
          </div>
          <div>
            <p className="font-semibold">Sub Region: </p>
            {country.subregion}
          </div>
          <div>
            <p className="font-semibold">Capital: </p>
            {country.capital}
          </div>
          <div>
            <p className="font-semibold">Top Lavel Domain: </p>
            <div className="inline-flex flex-wrap gap-1">
              {country.tld.map(tld => (
                <span key={tld}>{tld}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">Currencies: </p>
            <div className="inline-flex gap-1">
              {currencies.map(currency => (
                <span key={currency}>{currency}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">Languages: </p>
            <div className="inline-flex gap-1">
              {languages.map(language => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">Border Countries: </p>
            <div className="inline-flex flex-wrap gap-1">
              {country.borders.map(country => (
                <Badge>{country}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
