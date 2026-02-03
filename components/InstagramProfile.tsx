import React from 'react';

export interface InstagramProfileProps {
    username: string;
    name: string;
    pronouns?: string;
    bio: string;
    posts: string;
    followers: string;
    following: string;
    music?: string;
    imageUrl?: string;
    verification?: boolean;
}

const InstagramProfile: React.FC<InstagramProfileProps> = ({
    username,
    name,
    pronouns,
    bio,
    posts,
    followers,
    following,
    music,
    imageUrl,
    verification
}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 max-w-md mx-auto mb-8 text-left w-full hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 mr-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden relative">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        // Fallback to placeholder if image not found
                                        const target = e.target as HTMLImageElement;
                                        const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
                                        target.src = `https://ui-avatars.com/api/?name=${initials}&background=f5f5f5&color=a3a3a3&size=200`;
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400 font-bold text-xl">
                                    {name.charAt(0)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 min-w-0 ml-1">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base font-bold text-neutral-900 mr-1 flex items-center shrink-1 leading-tight">
                            {username}
                            {verification && (
                                <svg aria-label="Verified" className="ml-1 w-3 h-3 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 40 40">
                                    <path d="M19.998 3.094 14.638 0l-5.36 3.094-5.36 3.094L6.996 11.2l-2.078 5.61 2.078 5.61-3.078 5.013 5.36 3.095 5.36 3.094 5.36-3.094 5.36-3.095 3.078-5.012 2.078-5.61-2.078-5.61-3.078-5.013Z" fill="rgb(56, 151, 240)"></path>
                                    <path d="M28.01 16.81 19.998 25.4 11.986 16.81l3.522-3.327 4.49 4.26 7.99-7.587 3.522 3.327Z" fill="#fff"></path>
                                </svg>
                            )}
                        </h2>
                        {/* Follow button mini simulation or just empty space to balance */}
                    </div>

                    {/* Stats Row - Fixed Grid */}
                    <div className="grid grid-cols-3 gap-1 text-sm text-neutral-700 w-full mb-2">
                        <div className="text-center flex flex-col items-center">
                            <span className="font-bold text-neutral-900 text-sm">{posts}</span>
                            <span className="text-neutral-500 text-[10px] sm:text-xs">posts</span>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <span className="font-bold text-neutral-900 text-sm">{followers}</span>
                            <span className="text-neutral-500 text-[10px] sm:text-xs">followers</span>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <span className="font-bold text-neutral-900 text-sm">{following}</span>
                            <span className="text-neutral-500 text-[10px] sm:text-xs">following</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio Section */}
            <div className="mt-3">
                <div className="font-bold text-neutral-900">
                    {name} {pronouns && <span className="font-normal text-neutral-500 ml-1">{pronouns}</span>}
                </div>
                <p className="text-neutral-800 whitespace-pre-wrap text-sm leading-snug">
                    {bio}
                </p>
                {/* Music / Link simulation */}
                {music && (
                    <div className="flex items-center mt-2 text-xs text-neutral-500">
                        <svg aria-label="Audio" className="flex-shrink-0 mr-1" color="currentColor" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12.662 2.308A2.626 2.626 0 0 0 10.375 0H4.495a2.626 2.626 0 0 0-2.454 3.424l3.193 10.02a3.868 3.868 0 1 0 4.3 2.809l-2.03-6.6a.71.71 0 0 1 .68-.92h2.21a.7.7 0 0 1 .678.486l2.13 6.903a3.866 3.866 0 1 0 4.298 2.807l-3.235-10.748a2.628 2.628 0 0 0-1.605-5.873Zm-4.99 17.823a2.454 2.454 0 1 1 3.12-1.579 2.456 2.456 0 0 1-3.12 1.579Zm12.015-1.58a2.454 2.454 0 1 1-1.58 3.12 2.456 2.456 0 0 1 1.58-3.12ZM4.495 1.414h5.88a1.21 1.21 0 0 1 1.056 1.057l.156 .529H8.4a2.121 2.121 0 1 0 2.052 2.768l2.55-8.272a1.213 1.213 0 0 1 .742 2.68L10.5 10.975a.71.71 0 0 0-.58.192.71.71 0 0 0-.174.62l.504 1.636a3.816 3.816 0 0 0-2.28 2.21 3.87 3.87 0 0 0 .52 3.8 2.593 2.593 0 1 1-3.6-2.5 2.592 2.592 0 0 1 2.5 1.77.708.708 0 0 0 1.344-.413l-3.194-10.02a1.213 1.213 0 0 1 1.134-1.582Z" fillRule="evenodd"></path></svg>
                        <span className="truncate max-w-[200px]">{music}</span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="bg-neutral-100 text-neutral-900 font-semibold py-1.5 px-4 rounded-lg text-sm hover:bg-neutral-200 transition-colors">
                    Follow
                </button>
                <button className="bg-neutral-100 text-neutral-900 font-semibold py-1.5 px-4 rounded-lg text-sm hover:bg-neutral-200 transition-colors">
                    Message
                </button>
            </div>

        </div>
    );
};

export default InstagramProfile;
