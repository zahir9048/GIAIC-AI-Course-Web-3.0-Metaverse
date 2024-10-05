
import Link from "next/link";


export default function CountryName({params}:any) {

  
    return (
      <div>
        <ul>
            <li><Link href="./country/pakistan">Pakistan</Link></li>
            <li><Link href="./country/india">India</Link></li>
            <li><Link href="./country/japan">Japan</Link></li>
        </ul>
      </div>
    );
  }
  