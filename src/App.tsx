import { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Cargando...</>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}