export interface Location {
  city: string
  state?: string
  country: string
  currency: string
}

export const locations: Location[] = [
  { city: 'Curitiba', state: 'PR', country: 'Brazil', currency: 'BRL' },
  { city: 'São Paulo', state: 'SP', country: 'Brazil', currency: 'BRL' },
  { city: 'Porto Alegre', state: 'RS', country: 'Brazil', currency: 'BRL' },

  { city: 'New York', state: 'NY', country: 'United States', currency: 'USD' },
  { city: 'Austin', state: 'TX', country: 'United States', currency: 'USD' },
  { city: 'Seattle', state: 'WA', country: 'United States', currency: 'USD' },

  { city: 'London', country: 'United Kingdom', currency: 'GBP' },
  { city: 'Manchester', country: 'United Kingdom', currency: 'GBP' },
  { city: 'Birmingham', country: 'United Kingdom', currency: 'GBP' },

  { city: 'Dublin', country: 'Ireland', currency: 'EUR' },
  { city: 'Cork', country: 'Ireland', currency: 'EUR' },

  { city: 'Amsterdam', country: 'Netherlands', currency: 'EUR' },
  { city: 'Rotterdam', country: 'Netherlands', currency: 'EUR' },
  { city: 'Utrecht', country: 'Netherlands', currency: 'EUR' },

  { city: 'Paris', country: 'France', currency: 'EUR' },
  { city: 'Lyon', country: 'France', currency: 'EUR' },
  { city: 'Toulouse', country: 'France', currency: 'EUR' },
]