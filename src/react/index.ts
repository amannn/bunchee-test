export function react() {
  if (process.env.NODE_ENV === 'development') {
    console.log('react function called');
  }

  return 'react';
}
