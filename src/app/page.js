'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [mahasiswa, setMahasiswa] = useState([])

  useEffect(() => {
    getMahasiswa()
  }, [])

  async function getMahasiswa() {
    const { data, error } = await supabase
      .from('mahasiswa')
      .select('*')

    if (error) {
      console.log(error)
    } else {
      setMahasiswa(data)
    }
  }

  return (
    <div className="p-10">
      <h1>Data Mahasiswa</h1>

      <table>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Prodi</th>
          </tr>
        </thead>

        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs.id}>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.prodi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
