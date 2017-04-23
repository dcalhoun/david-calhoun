import Link from 'next/link'

const Header = () => (
  <header className='flex flex-wrap py3'>
    <h1 className='h2 m0 mr1 inline-block'>
      <Link href='/'>
        <a>David Calhoun</a>
      </Link>
    </h1>
    <div className='flex-auto' />
    <nav className='flex flex-baseline mxn1'>
      <Link href='/writing'>
        <a className='h6 btn p1'>Writing</a>
      </Link>
      <a className='h6 btn p1' href='http://twitter.com/david_calhoun'>Twitter</a>
      <a className='h6 btn p1' href='http://github.com/dcalhoun'>GitHub</a>
    </nav>
  </header>
)

export default Header
