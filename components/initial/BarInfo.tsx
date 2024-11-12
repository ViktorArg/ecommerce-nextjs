import SvgIcon from '@utils/SvgIcon';
import Separator from './Separator';

export const data = [
    {
      icon: "document-arrow-down",
      title: "Customized Party Invitations",
      description: "",
    },
    {
      icon: "photo",
      title: "5x7 or 4x6 size",
      description: "",
    },
    {
      icon: "user-circle",
      title: "High Quality 300ppi file",
      description: "",
    },
    {
      icon: "shopping-bag",
      title: "24h Turn Around or less",
      description: "",
    },
];

const BarInfo = () => {
  return (
    <div className='sectionGrid'>
      <div className="h-10 w-full -scale-y-100 -scale-x-100 m-0">
      <Separator />
    </div>
          <div className='bar_info'>
              {data.map((item) => (
              <div key={item.title}>
                  <div className='card_info'>
                    <div className='w-1/4'>
                      <SvgIcon type={item.icon} />
                    </div>
                    <h5 className='w-3/4'>{item.title}</h5>
                  </div>
              </div>
              ))}
          </div>
              <div className="h-10 w-full mb-10">
              <Separator />

            </div>
    </div>
    );
}

export default BarInfo