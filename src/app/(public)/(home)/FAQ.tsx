const FAQ = () =>
<section id="faq" className="w-full flex flex-col items-center justify-center gap-7 text-center pt-10 pb-20 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
  <h3 className="text-primary font-bold mb-3">Frequently Asked Questions</h3>

  <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-2">
    <div className="collapse collapse-arrow bg-gray-900 bg-opacity-65 rounded-lg">
      <input type="checkbox"/>
      <h6 className="flex items-center collapse-title">
        Question that is soooo frequently asked...
      </h6>
      <div className="collapse-content flex items-start"> 
        <small>Answer that is soooo frequently said....</small>
      </div>
    </div>

    <div className="collapse collapse-arrow bg-gray-900 bg-opacity-65 rounded-lg">
      <input type="checkbox"/> 
      <h6 className="flex items-center collapse-title">
        Question that is soooo frequently asked...
      </h6>
      <div className="collapse-content flex items-start"> 
        <small>Answer that is soooo frequently said....</small>
      </div>
    </div>

    <div className="collapse collapse-arrow bg-gray-900 bg-opacity-65 rounded-lg">
      <input type="checkbox"/> 
      <h6 className="flex items-center collapse-title">
        Question that is soooo frequently asked...
      </h6>
      <div className="collapse-content flex items-start"> 
        <small>Answer that is soooo frequently said....</small>
      </div>
    </div>
  </div>
</section>;
export default FAQ;