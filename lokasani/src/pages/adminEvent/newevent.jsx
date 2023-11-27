import React, { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import user from '../../assets/img/user.svg';
import Sidebar from '../../component/adminEvent/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function NewEvent() {
  const [poster, setPoster] = useState(null);

  const handlePosterUpload = (event) => {
    const file = event.target.files[0];
   
    setPoster(file);
  };

  const [poster1, setPoster1] = useState(null);
  
  const handlePosterUpload1 = (event) => {
    const file = event.target.files[0];
   
    setPoster1(file);
  };
 
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const [eventNama, setEventNama] = useState('');
  const [eventDeskripsi, setEventDeskripsi] = useState('');
  const [Price, setPrice] = useState('');

  const [eventNama1, setEventNama1] = useState('');
  const [eventDeskripsi1, setEventDeskripsi1] = useState('');
  const [Price1, setPrice1] = useState('');
  

  const [namaDescription, setNamaDescription] = useState('');
  const [alamatDescription, setAlamatDescription] = useState(''); 

// fungsi tanggal mulai-selesai
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
// fungsi gomaps
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <section>
      <Sidebar />
      <main className="sm:ml-64 bg-[#F2F2F2] h-screen">
        {/* header start */}
        <div className="bg-white flex items-center justify-between py-7 rounded-sm">
          <div className='pl-5'>
            <h1 className='text-3xl font-bold'>Add New Event</h1>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex items-center relative mr-5">
                <SearchIcon className='ml-3 cursor-pointer absolute' />
                <CloseIcon className='ml-[315px] cursor-pointer absolute' />
                <input type="text" name="name" placeholder="Cari apa" className="w-[350px] py-1 pl-12 bg-[#F2F2F2] rounded-full" />
              </div>
              <div className='flex mr-16 gap-x-6'>
                <a className='cursor-pointer'>
                  <TextsmsIcon className='text-[#253E8D]' />
                </a>
                <a className='cursor-pointer'>
                  <NotificationsActiveIcon className='text-[#253E8D]' />
                </a>
                <a href="">
                  <img className="w-6 h-6 rounded-full" src={user} alt="Rounded avatar" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}
        {/* content start */}
        <div className='bg-gray-200'>
        <div className="grid grid-cols-1 gap-1 p-2">
          <div className="col-span-1 bg-white p-4 rounded-md relative">
            <h1 className='text-3xl font-bold text-sm'>Tentang Eventmu</h1>
            <span className='text-[#999999] ml-1'>Masukkan detail event-mu di sini!</span>

            <div className="flex items-center mt-4 space-x-8">
              {/* Kolom Unggah */}
              <div className="border-dashed border-2 border-gray-400 p-8 rounded-md aspect-w-1 aspect-h-1">
                <div className="flex flex-col items-center">
                  <AddAPhotoIcon className='text-[#768DD5]' />
                  <h1 className='text-3xl font-bold text-sm'>Unggah poster Event Anda di sini</h1>
                  <h1 className="block text-sm font-medium text-[#828282] ">
                    Upload gambar untuk poster event kamu Max ukuran 500kb
                  </h1>
                  <div className="mt-1 flex items-center">
                    <input type="file" accept="image/*" onChange={handlePosterUpload} id="poster" className="hidden" />
                    <button htmlFor="poster" className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2">
                      Unggah Poster
                    </button>
                    {poster && (
                      <span className="ml-2 text-gray-500">{poster.name}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md flex flex-col">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Nama:</h1>
                    <input
                      type="text"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                    />
                  </div>  
                    <div className="col-span-1">
                      <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Jenis Event:</h1>
                      <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full text-[#768DD5]">
                        <option value="">Pilih Jenis Event</option>
                        <option value="Conference">Conference</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                      </select>
                    </div>
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Deskripsi:</h1>
                    <textarea
                      type="text"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* lokasi event */}
            <div className="grid grid-cols-2 gap-3 p-2">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-1 rounded-md relative">
              <h1 className='text-3xl font-bold text-sm'>Lokasi Event</h1>
                <span className='text-[#999999] ml-1'>Jabarkan lokasi event Anda di sini!</span>
                <button
                className='flex items-center justify-center cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full  w-full'>
                + Unggah Link Venue (Gomaps)
              </button>
                <div className='grid grid-cols-2'>
                <div className="col-span-1 p-2 " style={{ width: '200px' }}>
                        <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Nama Venue:</h1>
                        <textarea
                          type="text"
                          value={namaDescription}
                          onChange={(e) => setNamaDescription(e.target.value)}
                          placeholder="text"
                          className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <div className="col-span-1 p-2" style={{ width: '200px' }}>
                        <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Alamat Venue:</h1>
                        <textarea
                          type="text"
                          value={alamatDescription}
                          onChange={(e) => setAlamatDescription(e.target.value)}
                          placeholder="text"
                          className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                        />
                      </div>
                      <div>

                      <label htmlFor="poster" className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                      + Unggah Denah Venue 
                        </label>
                      </div>
                      <div>
                      <label htmlFor="poster" className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
                      + Unggah Denah Venue 
                        </label>
                      </div>
                  </div>
              </div>

            {/* Waktu event */}
              <div className="grid grid-cols-1 gap-1">
                <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-4 rounded-md relative">
          <h1 className='text-3xl font-bold text-sm'>Waktu Event</h1>
          <span className='text-[#999999] ml-1'>Kapan Event Anda dilaksanakan?</span>
        <div className='grid grid-cols-2'> 
          <div className="mt-4">
            <label className="block text-sm font-medium text-[#768DD5] mb-2">Tanggal Mulai:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#768DD5] mb-2">Tanggal Selesai:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#768DD5] mb-2">Jam Mulai:</label>
            <DatePicker
              selected={startTime}
              onChange={(time) => setStartTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#768DD5] mb-2">Jam Selesai:</label>
            <DatePicker
              selected={endTime}
              onChange={(time) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </div>
          </div>
        </div>

          {/* Guest start */}
            <div className="col-span-4 sm:col-span-4 md:col-span-1 bg-white p-4 rounded-md relative">
              <div className="flex flex-col justify-between ">
              <h1 className='text-3xl font-bold text-sm'>Guest Start</h1>
            <span className='text-[#999999] ml-1'>Tambahkan Pemeriah Acara!</span>
            <div className='grid grid-cols-2 gap-x-4'>
              <div className="border-dashed border-2 border-gray-400 p-8 rounded-md aspect-w-1 aspect-h-1">
              <label htmlFor="poster" className="block text-sm font-medium text-[#828282] mt-2">
              + Tambah Guest Star 
                  </label>
              </div>
              <div className='rounded-md   flex flex-col p-2 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1'>
              <img src='guest.png' alt="Deskripsi gambar" />
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 p-2">
  <div className="col-span-1 bg-white p-4 rounded-md relative">
    <h1 className='text-3xl font-bold text-sm'>Detail Tiketing</h1>
    <span className='text-[#999999] ml-1'>Jabarkan Tiket yang ingin Anda daftarkan</span>
    <div className='flex p-4'>
      <button className="ml-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
        + Tambah Tiket
      </button>
    </div>
    <div className='mb-4 rounded-md relative flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-2'>
      <div className='flex'>
        <button className="cursor-pointer bg-[#CA9702] hover:bg-yellow-600 text-white py-2 px-4 rounded-full ml-2 text-sm">
          Workshop
        </button>
        <button className="cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
          Reguler
        </button>
        <div className='ml-auto'>
        <CreateIcon/>
        <DeleteIcon/>
        </div>
      </div>
      <h1 className='text-3xl font-bold text-sm'>Workshop Keramik Jawa Timur bersama Kak Seto</h1>
      <span className='text-[#999999]'>Lorem ipsum dolor sit amet consectetur. Amet varius turpis habitasse tempus. Eros eu aliquet enim rutrum etiam venenatis dolor tortor.</span>
      <div className="text-sm flex items-center">
      <CloseIcon color="primary"/>
      <span className='ml-2'>500 Tiket mulai dijual tanggal 25 Nov 2023</span>
      </div>
      <div className="border-b border-dashed border-[#768DD5] mt-1"></div>
      <div className="absolute left-1 top-0 bg-[#CA9702] w-2 h-full ml-2"></div>
      <h1 className='text-3xl font-bold text-sm mt-5'>Rp.85.000</h1>
    </div>
    <div className='mb-4 relative'>
    <div className='mb-4 rounded-md relative flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-2'>
      <div className='flex '>
        <button className="cursor-pointer bg-[#CA9702] hover:bg-yellow-600 text-white py-2 px-4 rounded-full ml-2 text-sm">
          Workshop
        </button>
        <button className="cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
          Reguler
        </button>
        <div className='ml-auto'>
        <CreateIcon/>
        <DeleteIcon/>
        </div>
      </div>
      <h1 className='text-3xl font-bold text-sm'>Workshop Keramik Jawa Timur bersama Kak Seto</h1>
      <span className='text-[#999999]'>Lorem ipsum dolor sit amet consectetur. Amet varius turpis habitasse tempus. Eros eu aliquet enim rutrum etiam venenatis dolor tortor.</span>
      <div className="text-sm flex items-center">
      <CloseIcon color="primary"/>
      <span className='ml-2'>500 Tiket mulai dijual tanggal 25 Nov 2023</span>
      </div>
      <div className="border-b border-dashed border-[#768DD5] mt-1"></div>
      <div className="absolute left-1 top-0 bg-[#CA9702] w-2 h-full ml-2"></div>
      <h1 className='text-3xl font-bold text-sm mt-5'>Rp.85.000</h1>
    </div>
    </div>
      <div className='grid grid-cols-2'>
      <div className='col-span-1 bg-white p-4 rounded-md relative'>
      <h1 className='text-3xl font-bold text-sm text-[#3653B0]'>Formulir Pemesanan*</h1>

      {/* Nama */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="nama"
          name="option"
          checked={selectedOption === 'nama'}
          onChange={() => handleOptionChange('nama')}
          className="mr-2"
        />
        <label htmlFor="nama" className="ml-2">Nama</label>
      </div>

      {/* Email */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="email"
          name="option"
          checked={selectedOption === 'email'}
          onChange={() => handleOptionChange('email')}
          className="mr-2"
        />
        <label htmlFor="email" className="ml-2">Email</label>
      </div>

      {/* Nomor Handphone */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="nomorHandphone"
          name="option"
          checked={selectedOption === 'nomorHandphone'}
          onChange={() => handleOptionChange('nomorHandphone')}
          className="mr-2"
        />
        <label htmlFor="nomorHandphone" className="ml-2">Nomor Handphone</label>
      </div>

      {/* Nomor KTP */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="nomorKTP"
          name="option"
          checked={selectedOption === 'nomorKTP'}
          onChange={() => handleOptionChange('nomorKTP')}
          className="mr-2"
        />
        <label htmlFor="nomorKTP" className="ml-2">Nomor KTP</label>
      </div>

      {/* Tanggal Lahir */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="tanggalLahir"
          name="option"
          checked={selectedOption === 'tanggalLahir'}
          onChange={() => handleOptionChange('tanggalLahir')}
          className="mr-2"
        />
        <label htmlFor="tanggalLahir" className="ml-2">Tanggal Lahir</label>
      </div>

      {/* Jenis Kelamin */}
      <div className="flex items-center mt-4">
        <input
          type="radio"
          id="jenisKelamin"
          name="option"
          checked={selectedOption === 'jenisKelamin'}
          onChange={() => handleOptionChange('jenisKelamin')}
          className="mr-2"
        />
        <label htmlFor="jenisKelamin" className="ml-2">Jenis Kelamin</label>
      </div>
    </div>
      <div className='col-span-1 bg-white p-4 rounded-md relative'>
      <h1 className='text-3xl font-bold text-sm text-[#3653B0]'>Pengaturan Tambahan*</h1>
      <div className='flex items-center'>
      <h1 className='mr-2 text-3xl font-bold text-sm'>Jumlah maks. tiket per transaksi</h1>
      <select className="bg-white text-[#999999] px-2 py-2 rounded-md outline outline-black outline-1 ml-auto ">
        <option>Jumlah Tiket</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>dll</option>
      </select>
      </div>
      <span className='text-[#999999] ml-1'>Jabarkan Tiket yang ingin Anda daftarkan</span>
      <div className='col-span-1 bg-white  rounded-md relative mt-20'>
      <h1 className='text-3xl font-bold text-sm p-'>Pengaturan Tambahan*</h1>
      <div className='col-span-1 bg-white rounded-md relative'>
      <Brightness1Icon color='primary' sx={{fontSize: 10}}/>
      <span className='text-[#999999] ml-1'>1 akun email dapat melakukan lebih dari 1 kali transaksi</span>
      </div>
      <Brightness1Icon color='primary' sx={{fontSize: 10}}/>
      <span className='text-[#999999] ml-1'>Data antar tiket tidak boleh sama</span> 
      </div>
     
      </div>
      </div>
  </div>
</div>


        {/* kolom Tambah Merch */}
        <div className="grid grid-cols-1 gap-1 p-2">
          <div className="col-span-1 bg-white p-4 rounded-md relative">
            <h1 className='text-3xl font-bold text-sm'>Tambah Merch</h1>
            <span className='text-[#999999] ml-1'>Masukkan Mech untuk Menambah Keseruan Event Kamu!</span>
            <div className='flex'>
            <button className="ml-auto cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 text-sm">
            + Import Data dari File
            </button>
            </div>
            <div className="col-span-1 bg-white p-4 rounded-md relative">
            <div className="grid grid-cols-2 flex items-center mt-4 space-x-8">
              {/* Kolom Unggah */}
              <div className="border-dashed border-2 border-gray-400 p-20 rounded-md aspect-w-1 aspect-h-1">
                <div className="flex flex-col items-center">
                  <AddAPhotoIcon className='text-[#768DD5]' />
                  <h1 className='text-3xl font-bold text-sm'>Unggah poster Event Anda di sini</h1>
                  <h1 className="block text-sm font-medium text-[#828282]">
                  Upload gambar untuk poster event kamu Max ukuran 500kb
                  </h1>
                  <div className="mt-1 flex items-center">
                    <input type="file" accept="image/*" onChange={handlePosterUpload1} id="poster1" className="hidden" />
                    <label htmlFor="poster" className="cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2">
                      Unggah Poster
                    </label>
                    {poster1 && (
                      <span className="ml-2 text-gray-500">{poster1.name}</span>
                    )}
                  </div>
                </div>
              </div>
              {/* Kolom Nama sampai Deskripsi */}
              <div className="bg-white p-4 rounded-md flex flex-col">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Nama:</h1>
                    <input
                      type="text"
                      value={eventNama}
                      onChange={(e) => setEventNama(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                    />
                  </div>
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Deskripsi:</h1>
                    <textarea
                      type="text"
                      value={eventDeskripsi}
                      onChange={(e) => setEventDeskripsi(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                    />
                  </div>
                  <label className="text-3xl font-bold text-sm text-[#768DD5]">Harga:</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">Rp</span>
                    </div>
                    <input
                      type="text"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      value={Price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="grid grid-cols-2 flex items-center mt-4 space-x-8">
              {/* Kolom Unggah */}
              <div className='rounded-md  flex flex-col p-20 bg-light-yellow rounded-lg shadow-md hover:bg-tan ring-[#768DD5] ring-1'>
              tempat gambar
              </div>
              {/* Kolom Nama sampai Deskripsi */}
              <div className="bg-white p-4 rounded-md flex flex-col">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Nama:</h1>
                    <input
                      type="text"
                      value={eventNama1}
                      onChange={(e) => setEventNama1(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-2 rounded-md border border-gray-300 w-full"
                    />
                  </div>
                  <div className="col-span-1 " style={{ width: '400px' }}>
                    <h1 className='text-3xl font-bold text-sm text-[#768DD5]'>Deskripsi:</h1>
                    <textarea
                      type="text"
                      value={eventDeskripsi1}
                      onChange={(e) => setEventDeskripsi1(e.target.value)}
                      placeholder="text"
                      className="bg-[#F2F2F2] mt-2 p-5 rounded-md border border-gray-300 w-full"
                    />
                  </div>
                  <label className="text-3xl font-bold text-sm text-[#768DD5]">Harga:</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">Rp</span>
                    </div>
                    <input
                      type="text"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      value={Price1}
                      onChange={(e) => setPrice1(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
            </div>
            <div className='flex items-center justify-center'>
            <button className='flex items-center justify-center cursor-pointer bg-[#3653B0] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full'>
              + Tambah Merch
            </button>
          </div>

          </div>
          </div>  
        </div>
        <div className="grid grid-cols-1 gap-1 p-2">
        
          <button className='flex items-center justify-center cursor-pointer bg-[#768DD5] hover:bg-blue-800 text-white py-2 px-4 rounded-full ml-2 w-full'>
            Simpan Draft Event
          </button>
        </div>
      </div>
        
        {/* content end */}
    </main>
  </section>
  );
}

export default NewEvent;
