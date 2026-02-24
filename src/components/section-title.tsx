export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="relative inline-block text-2xl font-bold text-white sm:text-3xl">
            {children}
            <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent" />
        </h2>
    );
}
