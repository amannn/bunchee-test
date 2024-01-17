export default function hello(name:string) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Hello function called');
  }

  return `Hello ${name}!`;
}
