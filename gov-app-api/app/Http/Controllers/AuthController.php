// app/Http/Controllers/AuthController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registrar(Request $request)
    {
        // Validação dos dados de entrada
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'dt_nascimento' => 'required|date',
            'senha' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Verifica se o usuário tem mais de 18 anos
        $dtNascimento = new \DateTime($request->dt_nascimento);
        $hoje = new \DateTime();
        $idade = $hoje->diff($dtNascimento)->y;

        if ($idade < 18) {
            return response()->json(['error' => 'O usuário deve ter mais de 18 anos'], 400);
        }

        // Cria o novo usuário
        $user = User::create([
            'email' => $request->email,
            'dt_nascimento' => $request->dt_nascimento,
            'password' => Hash::make($request->senha),
        ]);

        return response()->json(['message' => 'Registro realizado com sucesso'], 201);
    }
    public function acessar(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->senha, $user->password)) {
            return response()->json(['error' => 'Credenciais inválidas'], 401);
        }

        return response()->json(['auth' => true, 'user' => $user->email], 200);
    }
    public function listagemUsuarios()
    {
        $usuarios = User::all(['id', 'email', 'dt_nascimento']);
        return response()->json($usuarios);
    }
}
