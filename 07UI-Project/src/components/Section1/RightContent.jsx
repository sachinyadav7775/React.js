import RightCard from './RightCard';

const RightContent = (props) => {
    return (
        <div id="right" className="h-full flex flex-nowrap rounded-4xl gap-10 overflow-x-auto w-3/4">
            {props.users.map(function(elem) {
                return (
                <RightCard
                    key={elem.num}
                    num={elem.num}
                    img={elem.img}
                    intro={elem.intro}
                    tag={elem.tag}
                    btnColor={elem.btnColor} />
                );
            })}
        </div>
    );
};

export default RightContent;