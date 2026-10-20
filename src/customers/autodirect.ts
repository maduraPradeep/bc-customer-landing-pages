import type { CustomerConfig } from './types'

export const autodirect: CustomerConfig = {
  slug: 'autodirect',
  name: 'AutoDirect',
  accent: '#1d4ed8',
  headline: 'Meet your AutoDirect AI assistant',
  subhead:
    'Answer customer questions and book test drives around the clock, with a smooth hand-off to your team when it matters.',
  primaryCta: { label: 'Try the live demo', href: '#demo' },
  secondaryCta: { label: 'Book a call', href: 'mailto:hello@botcircuits.com?subject=AutoDirect%20demo' },
  chat: [
    { from: 'user', text: 'Do you have any hybrid SUVs available this week?' },
    { from: 'bot', text: 'Yes, we have 4 in stock. Would you like to see prices or book a test drive?' },
    { from: 'user', text: 'Book a test drive for Saturday morning.' },
    { from: 'bot', text: 'Done. Saturday 10:00 is reserved. I have sent a confirmation to your email.' },
  ],
  features: [
    { title: 'Instant answers', body: 'Stock, pricing, financing and service questions answered in seconds.' },
    { title: 'Book test drives', body: 'Customers pick a car and a slot; your calendar stays in sync.' },
    { title: 'Hand off to a human', body: 'Complex or high-value conversations move to your team with full context.' },
  ],
  steps: [
    { title: 'Connect your data', body: 'Inventory, FAQs and calendars.' },
    { title: 'Design the flow', body: 'Shape the conversation in BotCircuits.' },
    { title: 'Go live', body: 'Embed on your site and messaging channels.' },
  ],
  contactEmail: 'hello@botcircuits.com',
  widgetAccessKey: '<ACCESS_KEY>',
}
