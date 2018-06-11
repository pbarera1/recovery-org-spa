export default props => {
    return (
        <div>
            {props.children}
            <style jsx>
                {`
                    min-height: 100%;
                    height: auto !important;
                    margin: 0 auto;
                `}
            </style>
        </div>
    );
};
