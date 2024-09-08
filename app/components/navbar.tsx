import { Button } from './ui/button';

const Navbar = () => {
    return (
        <div className='w-full h-16 bg-neutral-900 shadow-md'>
            <div className='flex flex-row justify-between items-center container mx-auto py-2'>
                <div className='text-2xl font-medium text-neutral-100 shadow-md'>Stubby</div>
                <div className='flex flex-row items-center'>
                    <a href='https://discord.com/oauth2/authorize?client_id=1262809684667011094'>
                        <Button variant={'default'} className='bg-purple-500 hover:bg-purple-600'>
                            Invite
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
