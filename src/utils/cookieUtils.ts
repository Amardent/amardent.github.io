/**
 * Utility functions for handling cookies
 */

/**
 * Get a cookie value by name
 * @param name The name of the cookie
 * @returns The value of the cookie or null if not found
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

/**
 * Set a cookie with a given name, value, and expiration in days
 * @param name The name of the cookie
 * @param value The value to set
 * @param days Number of days until the cookie expires
 */
export function setCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

/**
 * Check if a cookie exists
 * @param name The name of the cookie to check
 * @returns true if the cookie exists, false otherwise
 */
export function hasCookie(name: string): boolean {
  return getCookie(name) !== null;
}

/**
 * Delete a cookie by setting its expiration to the past
 * @param name The name of the cookie to delete
 */
export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;

  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  console.log(`Cookie ${name} deleted`);
}
