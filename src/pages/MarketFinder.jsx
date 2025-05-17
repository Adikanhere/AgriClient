// src/pages/MarketFinder.jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MarketFinder = () => {
  const [city, setCity]             = useState('')
  const [latitude, setLatitude]     = useState('')
  const [longitude, setLongitude]   = useState('')
  const [result, setResult]         = useState(null)
  const [error, setError]           = useState(null)
  const navigate                     = useNavigate()

  // 1) Auto-detect via browser
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser')
      return
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        setLatitude(pos.coords.latitude.toFixed(6))
        setLongitude(pos.coords.longitude.toFixed(6))
        setError(null)
      },
      err => setError('Permission denied or unavailable')
    )
  }

  // 2) Submit to your /api/market/nearby endpoint
  const handleSubmit = async e => {
    e.preventDefault()
    setError(null)
    setResult(null)

    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/market/nearby',
        { latitude: +latitude, longitude: +longitude, city }
      )
      setResult(data)
    } catch (e) {
      console.error(e)
      setError(e.response?.data || 'Network error')
    }
  }

  return (
    <div style={{
      maxWidth: 480,
      margin: '4rem auto',
      padding: '2rem',
      boxShadow: '0 0 12px rgba(0,0,0,0.1)',
      borderRadius: 8,
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>
        Find Your Nearest Market
      </h2>

      {/* Detect button */}
      <button
        onClick={handleDetectLocation}
        style={{
          display: 'block',
          margin: '1rem auto',
          padding: '.5rem 1rem',
          backgroundColor: '#66bb6a',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}>
        📍 Detect My Location
      </button>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '.5rem' }}>City (optional)</label>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="e.g. Pune"
          style={{ width: '100%', padding: '.5rem', marginBottom: '1rem' }}
        />

        <label style={{ display: 'block', marginBottom: '.5rem' }}>Latitude</label>
        <input
          type="number"
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
          placeholder="18.5204"
          style={{ width: '100%', padding: '.5rem', marginBottom: '1rem' }}
          required
        />

        <label style={{ display: 'block', marginBottom: '.5rem' }}>Longitude</label>
        <input
          type="number"
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
          placeholder="73.8567"
          style={{ width: '100%', padding: '.5rem', marginBottom: '1rem' }}
          required
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '.75rem',
            backgroundColor: '#2e7d32',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
          🔍 Find Nearest Market
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
          {error}
        </p>
      )}

      {result && (
        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
          {typeof result === 'string'
            ? result
            : `Nearest Market: ${result.name} (${result.latitude}, ${result.longitude})`}
        </p>
      )}
    </div>
  )
}

export default MarketFinder
