import Image from 'next/image';

export default function Banner() {
    return (
        <Image
            src="/images/Banner_Restock_Desktop.jpg"
            width={0}
            height={0}
            alt="Banner HomePage Rotation"
            style={{ width: '100%', height: 'auto' }}
            sizes="100vw"
        />
    )
}