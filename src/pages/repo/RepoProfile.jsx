import React from 'react'

const RepoProfile = () => {
    const styles = {
        borderRadius: '50%'
    }
  return (
    <section className='w-full px-3 py-3 animate-pulse'>
{/* Photo and name  */}
        <div className="grid grid-cols-4">
            <div className="col-span-1 md:mt-3 md:col-span-3 ">
                <div style={styles} className="photo border-4 mx-auto w-20 md:w-60  h-20 md:h-60">

                </div>
            </div>
            <div className="col-span-3 w-full md:mt-5 h-full">
                <div className="repo-name flex flex-col h-full justify-center w-full ">
                <h1 className="w-7/12 my-2 bg-gray-300 h-5 "></h1>
                <p className="w-4/12 mt-1 bg-gray-300 h-3 "></p>
                </div>
            </div>
        </div>
{/* photo and name ends */}

    </section>
  )
}

export default RepoProfile