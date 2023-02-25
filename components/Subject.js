import React from 'react'
import Image from 'next/image'
import Heading from './Heading'


export const Subject = () => {
    return (
        <section className='max-w-screen-lg flex ml-auto mr-auto  p-2 flex-col' id="popular-courses">
            <Heading heading='SUBJECTS' subHeading='SUBJECTS OFFERED' />

            <div className='grid md:grid-cols-3 gap-7 md:gap-3 '>
                <div className='border border-gray-200'>
                    <Image width={600} height={500} src="/images/accounts.jpg" alt="" />
                    <div className='md:px-4 px-2'>
                        <h3 className='text-2xl font-bold font-kanit text-slate-700 my-5 '>Accountacy</h3>
                        <p className='font-molengo pb-5 '><strong>CBSE Class XI Accountancy</strong> is comprised of Introduction to Accounting, Theory Base of Accounting, Recording of Transaction - I, Recording of Transaction - II, Bank Reconciliation Statement, Trial Balance and Rectification of Errors, Depreciation, Provision, and Reserves, Bill of Exchange, Preparation of Financial Statements (with adjustments), Single entry and Theory for Computer Accounting.</p>
                        <p className='font-molengo pb-5 '><strong>CBSE Class XII Accountancy</strong> is comprised of Accounting for Not-for-Profit Organizations, Accounting for Partnership Firms – Fundamentals, Admission, Retirement and Death of a Partner, Change in profit sharing ratio and Dissolution of a firm; Accounting for Companies – Issue of Shares, Issue and Redemption of Debentures and Financial Statement Analysis – Comparative, Ratio and Cash Flow Analysis.</p>
                    </div>
                </div>
                <div className='border border-gray-200'>
                    <Image width={600} height={500} src="/images/bst.jpg" alt="" />
                    <div className='md:px-4 px-2'>
                        <h3 className='text-2xl font-bold font-kanit text-slate-700 my-5 '>Business Studies</h3>
                        <p className='font-molengo pb-5 '><strong>CBSE Class XI Business Studies</strong> is comprised of Business, Trade and Commerce, Forms of Business Organisations, Private, Public and Global Enterprises, Business Services, Emerging modes of Business, Social Responsibilities of Business and Business ethics, Formation of a Company, Sources of Business Finance, Small Business, Internal Trade and International Business.</p>
                        <p className='font-molengo pb-5 '> <strong>CBSE Class XII Business Studies</strong> is comprised of Nature and significance of Management, Principles of Management, Business Environment, Planning, Organising, Staffing, Directing, Controlling, Financial Management, Financial Markets, Marketing and Consumer Protection.</p>
                    </div>
                </div>
                <div className='border border-gray-200'>
                    <Image width={600} height={500} src="/images/economics.jpg" alt="" />
                    <div className='md:px-4 px-2'>
                        <h3 className='text-2xl font-bold font-kanit text-slate-700 my-5 px'>Economics</h3>
                        <p className='font-molengo pb-5 px'> <strong>CBSE Class XI Economics</strong> is comprised of Statistics for Economics – Introduction, Collection, Organisation and Presentation of data, Statistical Tools and Interpretation and Introductory Microeconomics – Introduction, Consumer’s Equilibrium and Demand, Producer Behaviour and Supply, Forms of market and Price Determination.</p>
                        <p className='font-molengo pb-5 px'><strong>CBSE Class XII Economics</strong> is comprised of Introductory Macroeconomics - National Income and Related Aggregates, Money and Banking, Determination of Income and Employment, Government Budget and the Economy, Balance of Payments and Indian Economic Development - Development Experience (1947-90) and Economic Reforms since 1991, Current Challenges facing Indian Economy and Development Experience of India – A Comparison with Neighbours.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Subject