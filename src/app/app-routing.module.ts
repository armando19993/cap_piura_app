import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login-colegiado',
    loadChildren: () => import('./login-colegiado/login-colegiado.module').then( m => m.LoginColegiadoPageModule)
  },
  {
    path: 'login-externo',
    loadChildren: () => import('./login-externo/login-externo.module').then( m => m.LoginExternoPageModule)
  },
  {
    path: 'registro-externo',
    loadChildren: () => import('./registro-externo/registro-externo.module').then( m => m.RegistroExternoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'credenciales-externo',
    loadChildren: () => import('./credenciales-externo/credenciales-externo.module').then( m => m.CredencialesExternoPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'editar-clave',
    loadChildren: () => import('./editar-clave/editar-clave.module').then( m => m.EditarClavePageModule)
  },
  {
    path: 'noticia/:id',
    loadChildren: () => import('./noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'noticias-by-category/:id',
    loadChildren: () => import('./noticias-by-category/noticias-by-category.module').then( m => m.NoticiasByCategoryPageModule)
  },
  {
    path: 'bolsa-trabajo',
    loadChildren: () => import('./bolsa-trabajo/bolsa-trabajo.module').then( m => m.BolsaTrabajoPageModule)
  },
  {
    path: 'bolsa-detalle/:id',
    loadChildren: () => import('./bolsa-detalle/bolsa-detalle.module').then( m => m.BolsaDetallePageModule)
  },
  {
    path: 'directorio',
    loadChildren: () => import('./directorio/directorio.module').then( m => m.DirectorioPageModule)
  },
  {
    path: 'dependencia-directorio',
    loadChildren: () => import('./dependencia-directorio/dependencia-directorio.module').then( m => m.DependenciaDirectorioPageModule)
  },
  {
    path: 'estado-de-cuenta',
    loadChildren: () => import('./estado-de-cuenta/estado-de-cuenta.module').then( m => m.EstadoDeCuentaPageModule)
  },
  {
    path: 'detalle-pago/:id',
    loadChildren: () => import('./detalle-pago/detalle-pago.module').then( m => m.DetallePagoPageModule)
  },
  {
    path: 'tipo-documento/:id',
    loadChildren: () => import('./tipo-documento/tipo-documento.module').then( m => m.TipoDocumentoPageModule)
  },
  {
    path: 'pasarela/:id/:monto',
    loadChildren: () => import('./pasarela/pasarela.module').then( m => m.PasarelaPageModule)
  },
  {
    path: 'pago-exitoso/:id/:pago',
    loadChildren: () => import('./pago-exitoso/pago-exitoso.module').then( m => m.PagoExitosoPageModule)
  },
  {
    path: 'pagados',
    loadChildren: () => import('./pagados/pagados.module').then( m => m.PagadosPageModule)
  },
  {
    path: 'cetificados-habilidad',
    loadChildren: () => import('./cetificados-habilidad/cetificados-habilidad.module').then( m => m.CetificadosHabilidadPageModule)
  },
  {
    path: 'qr-code/:id',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'junta-directiva',
    loadChildren: () => import('./junta-directiva/junta-directiva.module').then( m => m.JuntaDirectivaPageModule)
  },
  {
    path: 'junta-by-category/:id',
    loadChildren: () => import('./junta-by-category/junta-by-category.module').then( m => m.JuntaByCategoryPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'curso-reserva/:cursoId',
    loadChildren: () => import('./curso-reserva/curso-reserva.module').then( m => m.CursoReservaPageModule)
  },
  {
    path: 'curso-pago/:cursoId',
    loadChildren: () => import('./curso-pago/curso-pago.module').then( m => m.CursoPagoPageModule)
  },  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'cursos-by-category',
    loadChildren: () => import('./cursos-by-category/cursos-by-category.module').then( m => m.CursosByCategoryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
