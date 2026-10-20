import { useEffect, type CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import BotCircuitsWidget from '../components/BotCircuitsWidget'
import { getCustomer } from '../customers'
import NotFound from './NotFound'

export default function CustomerPage() {
  const { slug } = useParams()
  const c = getCustomer(slug)

  useEffect(() => {
    if (c) document.title = `${c.name} × BotCircuits`
  }, [c])

  if (!c) return <NotFound />

  return (
    <div className="page" style={{ '--accent': c.accent } as CSSProperties}>
      <header className="bar">
        <strong className="brand">{c.name}</strong>
        <span className="badge">Powered by BotCircuits</span>
      </header>

      <main>
        <section className="hero" id="demo">
          <div>
            <h1>{c.headline}</h1>
            <p className="lead">{c.subhead}</p>
            <div className="ctas">
              <a className="btn primary" href={c.primaryCta.href}>{c.primaryCta.label}</a>
              <a className="btn" href={c.secondaryCta.href}>{c.secondaryCta.label}</a>
            </div>
          </div>
          <div className="chat" aria-label="Example conversation">
            {c.chat.map((m, i) => (
              <p key={i} className={`msg ${m.from}`}>{m.text}</p>
            ))}
          </div>
        </section>

        <section className="grid3">
          {c.features.map((f) => (
            <article key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </section>

        <section>
          <h2>How it works</h2>
          <ol className="steps">
            {c.steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cta-band">
          <h2>Ready to see it on your data?</h2>
          <a className="btn inverse" href={`mailto:${c.contactEmail}`}>{c.contactEmail}</a>
        </section>
      </main>

      <footer>Prepared for {c.name} by BotCircuits</footer>

      {c.widgetAccessKey && <BotCircuitsWidget accessKey={c.widgetAccessKey} />}
    </div>
  )
}
