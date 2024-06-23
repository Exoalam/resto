'use client'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Suspense } from 'react';

const NewsDetailPage = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const shortDescription = searchParams.get('shortDescription');
    const longDescription = searchParams.get('longDescription');
    const image = searchParams.get('image');

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div data-theme='light'>
                <div className="container mx-auto px-4 py-8">
                    <Link href="/news" className="flex items-center mb-8">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        <span>Back to News</span>
                    </Link>
                    <div className="grid grid-cols-1 gap-8">
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-lg mb-2">{shortDescription}</p>
                        <div>
                            <img src={image} alt={title} className="rounded-lg shadow-md m-auto" />
                        </div>
                        <div>
                            <p className="text-base mb-8">{longDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default NewsDetailPage;