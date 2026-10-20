import { autodirect } from './autodirect'
import type { CustomerConfig } from './types'

// Add a customer: create <name>.ts next to this file and list it here.
const customers: CustomerConfig[] = [autodirect]

const bySlug = new Map(customers.map((c) => [c.slug, c]))

export const getCustomer = (slug: string | undefined) => (slug ? bySlug.get(slug.toLowerCase()) : undefined)
