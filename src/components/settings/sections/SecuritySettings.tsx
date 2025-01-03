import React from 'react';

export function SecuritySettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Sécurité</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Changer le mot de passe</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe actuel
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Mettre à jour
              </button>
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Authentification à deux facteurs
          </h3>
          <p className="text-gray-600 mb-4">
            Ajoutez une couche de sécurité supplémentaire à votre compte.
          </p>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Configurer
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium text-red-600 mb-4">Zone de danger</h3>
          <p className="text-gray-600 mb-4">
            Une fois supprimé, votre compte ne pourra pas être récupéré.
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Supprimer le compte
          </button>
        </div>
      </div>
    </div>
  );
}