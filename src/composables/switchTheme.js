export function getCurrentTheme() {
  return localStorage.getItem('theme') || 'dark'
}

export function toggleTheme() {
  const currentTheme = getCurrentTheme()
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', newTheme)
  document.body.className = newTheme
}

export function applyStoredTheme() {
  const storedTheme = getCurrentTheme()
  document.body.className = storedTheme
}
