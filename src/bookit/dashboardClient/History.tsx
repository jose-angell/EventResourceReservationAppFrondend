const activities = [
  { id: 1, type: 'login', title: 'Inicio de sesión', date: 'Hace 2 horas', desc: 'MacBook Pro - Chrome (Madrid, España)', icon: 'login', color: 'bg-brand-secondary/10 text-brand-secondary' },
  { id: 2, type: 'order', title: 'Reserva completada', date: 'Ayer, 14:30', desc: 'Pedido #ORD-8001 por $450.00', icon: 'shopping_cart_checkout', color: 'bg-brand-primary/10 text-brand-primary' },
  { id: 3, type: 'security', title: 'Cambio de contraseña', date: '10 Oct 2023', desc: 'Contraseña actualizada exitosamente', icon: 'lock_reset', color: 'bg-brand-alert/10 text-brand-alert' },
  { id: 4, type: 'payment', title: 'Tarjeta añadida', date: '05 Sep 2023', desc: 'VISA terminada en 4242', icon: 'credit_card', color: 'bg-brand-accent/10 text-brand-accent' },
  { id: 5, type: 'profile', title: 'Perfil actualizado', date: '01 Sep 2023', desc: 'Cambio de dirección de facturación', icon: 'manage_accounts', color: 'bg-slate-100 text-slate-600' },
];

export default function DashboardHistory() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-text-dark mb-2 tracking-tight">Historial de Actividad</h1>
        <p className="text-slate-500">Registro de todas las acciones realizadas en tu cuenta.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-lg font-bold text-brand-text-dark flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-primary">history</span>
            Últimos 30 días
          </h2>
          <button className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors">
            Descargar Registro
          </button>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="relative border-l-2 border-slate-100 ml-4 space-y-8 pb-4">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative pl-8 group">
                {/* Timeline dot */}
                <div className={`absolute -left-2.75 top-1 size-5 rounded-full border-4 border-white ${activity.color.split(' ')[0].replace('/10', '')} shadow-sm group-hover:scale-125 transition-transform`}></div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <div className={`size-8 rounded-lg ${activity.color} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined text-[18px]">{activity.icon}</span>
                    </div>
                    <h3 className="font-bold text-brand-text-dark text-base">{activity.title}</h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md self-start sm:self-auto">{activity.date}</span>
                </div>
                
                <p className="text-sm text-slate-500 ml-10">{activity.desc}</p>
                
                {index !== activities.length - 1 && (
                  <div className="absolute left-0 top-8 -bottom-8 w-px bg-slate-100 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 text-center">
          <button className="text-sm font-semibold text-slate-500 hover:text-brand-primary transition-colors flex items-center justify-center gap-2 mx-auto">
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
            Cargar más actividad
          </button>
        </div>
      </div>
    </div>
  );
}
