module.exports = () => (code, state) => `
import React from 'react'

export default function ${state.componentName}() {
  return ${code}
}
`
