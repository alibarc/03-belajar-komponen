import { getImageUrl } from '@/utils/utils';

export default function MyGallery() {
  // Buat objek untuk setiap ilmuwan
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      id: "szV5sdG",
      profession: "Fisikawan dan kimiawan",
      awards: "Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci",
      discovery: "polonium (unsur kimia)"
    },
    {
      name: "Katsuko Saruhashi",
      id: "YfeOqp2",
      profession: "Ahli Geokimia",
      awards: "Penghargaan Miyake Geokimia, Penghargaan Tanaka",
      discovery: "sebuah metode untuk mengukur karbon dioksida pada air laut"
    }
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* Map objek ilmuwan ke dalam elemen JSX */}
      {scientists.map((scientist, index) => (
        <section className="profile" key={index}>
          <h2>{scientist.name}</h2>
          <img
            className="avatar"
            src={getImageUrl(scientist.id)}
            alt={scientist.name}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profesi: </b>
              {scientist.profession}
            </li>
            <li>
              <b>Penghargaan: </b>
              {scientist.awards}
            </li>
            <li>
              <b>Telah Menemukan: </b>
              {scientist.discovery}
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
}