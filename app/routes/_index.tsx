import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: 'Stubby | Elenora Group' },
        {
            name: 'description',
            content:
                'A simple Discord ticketing system bot. Allows you to create different categories that allows users to open a ticket based on those categories and have one on one conversations with those individuals.',
        },
    ];
};

export default function Index() {
    return <div>Things n such</div>;
}
