import 'shared/config/i18nConfig/i18nConfig'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'app/providers/ErrorBoudary'
import { ErrorFallback } from 'widgets/ErrorFallback'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
