import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header>
      <div>
        <Link href='/'>
          <a>
            <Image src='/images/logo.png' 
              width={40} 
              height={40} alt='logo'/>
              <span className="ml-3 text-xl">DevSpace</span>
          </a>
        </Link>
        <nav>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </nav>
        <nav>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
