
const Download = () => {
    return (
      <>
        <h1 className="text-3xl font-bold mb-6 text-center">Downloads</h1>
  
        <div className="content">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloadItems.map((item, index) => (
              <li key={index} className="border rounded-lg p-4 shadow-md flex flex-col items-center">
                <i className={`icon ${item.icon}`} />
                <p className="text-lg font-semibold my-3 text-center">{item.title}</p>
                <a href="#" className="text-blue-500 text-center">Download</a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
const downloadItems = [
  { icon: 'css', title: 'Live Boot', url: 'https://example.com/css-download' },
  { icon: 'image', title: 'VM Ware Image', url: 'https://example.com/poster-download' },
  { icon: 'video', title: 'Virtual Box Images', url: 'https://example.com/snippets-download' },
  { icon: 'psd', title: 'ISO', url: 'https://example.com/twitter-download' },
  { icon: 'html', title: 'Source Code', url: 'https://example.com/html5-download' },
  { icon: 'image', title: 'Installer', url: 'https://example.com/html5-elements-download' },
];

export default Download;
